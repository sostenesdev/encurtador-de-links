import * as React from 'react';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { getLinks } from '../../services/usuarioService';
import { useLoading } from '../../contexts/LoadingContext';

const initialData ={
    page: 0,
    pageSize: 5,
    rows: [],
    rowCount: 0,
}
function Links() {
    const [data, setData] = React.useState(initialData);
    const { setLoading } = useLoading();

    const fetchUsuarios = async () => {
        setLoading(true);
        getLinks().then(response => {
            setData(response?.data ?? initialData)
        }).catch(error => {
            console.log('error', error)
        }).finally(() => {
            setLoading(false);
        });
    }

    React.useEffect(() => {
        fetchUsuarios();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'slug', headerName: 'Nome', width: 180 },
        { field: 'url', headerName: 'E-mail', width: 180 },
        { field: 'description', headerName: 'E-mail', width: 180 },
        { field: 'created_at', headerName: 'Data Cadastro', width: 200 },
        { field: 'updated_at', headerName: 'Data Atualização', width: 200 },
      ];

      const paginationModel = { page: 0, pageSize: 5 };
  return <>
            <Typography variant="h6" noWrap component="div">Usuários</Typography>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data.rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                    page={data.page}
                    pageSize={data.pageSize}
                />
            </Paper>

         </>
}

export default Links;
