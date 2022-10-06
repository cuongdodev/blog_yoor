import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({
    count
}) {
    const handleChange = (event, value) => {
        setPage(event);
    };
    return (
        <Stack spacing={2}>
            <Pagination count={count} shape="rounded" onChange={handleChange} />
        </Stack>
    );
}