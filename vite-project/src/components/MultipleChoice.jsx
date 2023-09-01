import { useState } from "react";
import { multiChoiceUrl } from "../common/url";
import { Button, Chip, Grid, Stack, Typography } from "@mui/material";

const MultipleChoice = (props) => {
    const [multiChoice, setMultiChoice] = useState(undefined);
    const [selectedDefinitionIndex, setSelectedDefinitionIndex] = useState(-1);

    const getMultiChoice = () => {
        fetch(
            `${multiChoiceUrl}?tag=${props.activeDictionary.tags[0]}`)
            .then((data) => data.json())
            .then((data) => {
                setMultiChoice(data)
                setSelectedDefinitionIndex(Math.floor(Math.random() * 4))})
            .catch((e) => console.log(e));
    }

    return (
        <>
            <Grid
                container
                direction={'row'}>
                {<Grid
                item>
                    <Button onClick={getMultiChoice}>Start Quiz</Button>
                    <Stack direction='column' spacing={1}>
                        {multiChoice &&
                            multiChoice.map((d, index) => (
                                <Chip
                                    label={d.word}
                                    key={index}
                                    onClick={() => {
                                        if (index === selectedDefinitionIndex) {
                                            console.log('Good Job!');
                                        } else {
                                            console.log('Try Again.');
                                        }
                                    }}
                                    color={'primary'}
                                />
                            ))}
                    </Stack>
                </Grid>}
                {<Grid
                item>
                    {multiChoice && <Typography variant="h4">{multiChoice[selectedDefinitionIndex].definition}</Typography>}
                </Grid>}
            </Grid>
        </>
    )
}

export default MultipleChoice;