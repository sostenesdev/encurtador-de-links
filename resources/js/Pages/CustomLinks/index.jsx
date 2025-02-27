import * as React from 'react';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { getLinks } from '../../services/linkService';
import { useLoading } from '../../contexts/LoadingContext';

const initialData ={
    page: 0,
    pageSize: 5,
    rows: [],
    rowCount: 0,
}
function CustomLinks() {
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
        { field: 'slug', headerName: 'Slug', width: 180 },
        { field: 'url', headerName: 'Url', width: 180 },
        { field: 'description', headerName: 'Descrição', width: 180 },
        { field: 'created_at', headerName: 'Data Cadastro', width: 200 },
        { field: 'updated_at', headerName: 'Data Atualização', width: 200 },
      ];

      const paginationModel = { page: 0, pageSize: 5 };
  return <>
            <Typography variant="h6" noWrap component="div">Links</Typography>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data.rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                    page={data.page}
                    pageSize={data.pageSize}
                    rowSelection={true}
                    checkboxSelection={false}
                    
                />
            </Paper>

         </>
}

export default CustomLinks;
