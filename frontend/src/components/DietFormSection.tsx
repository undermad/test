import {DietForm} from "./DietForm.tsx";
import {Box, Stack} from "@mui/material";
import saladicon from "../assets/images/saladicon.png";
import salad from "../assets/images/salad.webp";
import {FormHeader} from "./FormHeader.tsx";

export const DietFormSection = () => {

    return (
        <Stack direction={{xs: 'column', md: "row"}} spacing={5} justifyContent={"space-between"} sx={{alignItems: 'center'}}>

            <Stack spacing={3} sx={{width: {xs: '100%', md: '50%'}}}>
                <FormHeader text={"Generate your diet"} imageIcon={saladicon}/>
                <DietForm />
            </Stack>
            <Box sx={{width: {md: '50%'}, justifyContent: 'center', display: {xs: 'none', md: 'block'}}}>
                <img src={salad} alt={"saladicon in the bowl"} style={{width: '100%'}}/>
            </Box>

        </Stack>
    )
}