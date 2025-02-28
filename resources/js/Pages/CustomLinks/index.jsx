import * as React from 'react';
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { getLinks } from '../../services/linkService';
import { useLoading } from '../../contexts/LoadingContext';
import { Box, Button } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import CustomLinksModal from './CustomLinksModal';

const initialData ={
    page: 0,
    pageSize: 5,
    rows: [],
    rowCount: 0,
}
function CustomLinks() {
    const [data, setData] = React.useState(initialData);
    const [rowSelected, setRowSelected] = React.useState(null);
    const { setLoading } = useLoading();
    const [open, setOpen] = React.useState(false);

    const getLinkList = async () => {
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
        getLinkList();
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

    const handleClose = () =>{
        setOpen(!open);
        getLinkList();
    }

  return <>
            <CustomLinksModal open={open} handleClose={handleClose} item={rowSelected} />
            <Typography variant="h6" noWrap component="div">Links</Typography>
            <Box sx={{ display: 'flex' , justifyContent: 'flex-end', gap:1, marginBottom: 2 }}>
                {rowSelected && <>
                    <Button variant="contained" color="error" onClick={() => {setOpen(true)}}> <Delete /> Remover </Button>
                    <Button variant="contained" color="secondary" onClick={() => {setOpen(true)}}> <Edit /> Editar </Button>
                </>}
                <Button variant="contained" color="primary" onClick={() => {setOpen(true)}}>
                <Add /> Novo
                </Button>
            </Box>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                    page={data.page}
                    pageSize={data.pageSize}
                    rowSelection={true}
                    checkboxSelection={false}
                    onRowClick={(selected) => {
                        setRowSelected(selected.row)
                    }}
                    
                />
            </Paper>

         </>
}

export default CustomLinks;
