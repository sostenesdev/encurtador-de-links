import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';
import { Box } from '@mui/material';


const LinkRedirect = (props) => {

    // Get the URL parameter
    const { setLoading } = useLoading();
    const params = useParams();
    const navigate = useNavigate();
    console.log('slugParam', params);
    const redirect = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/links/${params.slug}`);
            const data = await response.json();
            console.log('data', data);
            if (data.url) {
                window.location.href = data.url;
            } else {
                navigate('/');
            }
        } catch (error) {
            console.log('error', error);
            navigate('/');
        } finally {
            setLoading(false);
        }
    }


    React.useEffect(() => {
        redirect();
    }, []);



    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Redirecionando ...</h1>
        </Box>
    );
}

export default LinkRedirect;