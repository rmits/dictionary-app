import { Chip, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { beginUrl } from "../common/url";

const DictionarySelection = (props) => {
    const [dictionaries, setDictionaries] = useState([]);
    const [ selectedDictionary, setSelectedDictionary] = useState(undefined);

    useEffect(() => {
        fetch(beginUrl)
            .then((data) => data.json())
            .then((data) => {
                setDictionaries(data)
                setSelectedDictionary(data)
                // props.setActiveDictionary(data[0])
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <Stack direction='row' spacing={1}>
            {dictionaries &&
                dictionaries.map((d, index) => (
                    <Chip
                        label={d.title}
                        key={index}
                        onClick={() => {
                            props.setActiveDictionary(d);
                            setSelectedDictionary(d);
                        }}
                        color={d._id === selectedDictionary._id ? 'primary' : 'secondary'}
                    />
                ))}
        </Stack>

    )
}

export default DictionarySelection;