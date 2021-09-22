import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import {useState, useCallback, useEffect} from "react";
import {debounce} from "lodash";
import {Pagination} from "@mui/material";
import {connect} from "react-redux";
import {add} from '../../store/historySlice';
import {useHistory, useLocation} from "react-router-dom";

function Search({history, addHistory}) {

    const [value, setValue] = useState('');

    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);

    const [totalCounter, setTotalCounter] = useState(0);

    const location = useLocation();
    const historyDom = useHistory();

    const replaceHistory = useCallback(() => {
        historyDom.replace({...location, state: undefined});
    }, [historyDom]);

    useEffect(()=> {
        replaceHistory();
    }, []);

    useEffect(()=> {
        if(location.state){
            setData(location.state.datatable);
            setValue(location.state.request);
        }
    }, [location.state]);

    const onChangeTextField = useCallback((e) => {
        const searchString = e.target.value.trimLeft();
        setValue(searchString);
        if (searchString)
            getData(searchString.trim());
    }, []);

    const onChangePagination = (event, val) => {
        setPage(val);
        getData(value, val);
    };

    const getData = useCallback(debounce(async (filter, pageNumber = 1) => {
        const request = `https://api.github.com/search/repositories?q=${filter}&page=${pageNumber}`;
        const {items, total_count} = await fetch(request)
            .then(response => response.json())
            .catch(error => {
                console.error('error', error);
                return [];
            });

        setData(items);
        setTotalCounter(Math.ceil(total_count/30));
        addHistory({ request, result: items });
    }, 500), []);

    return (
        <div className="container">
            <div className="textFieldContainer">
                <TextField
                    label="Input search request"
                    value={value}
                    type="string"
                    onChange={onChangeTextField}
                    margin="normal"
                    fullWidth
                />
            </div>
            <div className="tableContainer">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell variant="head">Name</TableCell>
                                <TableCell variant="head">Owner</TableCell>
                                <TableCell variant="head">Pushed at</TableCell>
                                <TableCell variant="head">Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow
                                    key={item.id}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.owner.login}</TableCell>
                                    <TableCell>{item.pushed_at}</TableCell>
                                    <TableCell>
                                        <a href={item.url}>{item.url}</a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data.length > 0 && (
                    <Pagination count={totalCounter} page={page} onChange={onChangePagination} />
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addHistory: add })(Search);
