import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';


export default function ActionAreaCard({itemNumber, itemName, Icon}) {
    return (
        <Card sx={{ minWidth: 200, bgcolor: '#2a2c31'}}>
            <CardActionArea sx={{px:2, py:1 }}>
                <CardContent>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Box component="div">
                            <Typography variant="h4" color="white" mb={1}>
                                {itemNumber}
                            </Typography>
                            <Typography color="white">
                                {itemName}
                            </Typography>
                        </Box>

                        <Box component="div" sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#3FA268', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon sx={{  color: '#fff',fontSize: 25 }} />
                        </Box>

                    </Stack>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}