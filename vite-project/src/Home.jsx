import {
  Button,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { beginUrl, dictionariesUrl, dictionaryUrl, randomWordUrl } from './common/url';
import TopDrawer from './components/TopDrawer';
import DictionarySelection from './components/DictionarySelection';

const Home = (props) => {
  const [wordAndDefinition, setWordAndDefinition] = useState(undefined);

  const getRandomWord = () => {
    fetch(
      `${randomWordUrl}?tag=${props.activeDictionary.tags[0]}`)
      .then((data) => data.json())
      .then((data) => setWordAndDefinition(data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Grid
        container
        direction={'row'}
        alignItems={'center'}
      >
        <Grid
          container
          direction={'row'}
          sx={{ m: 2 }}
          justifyContent='flex-start'
          alignItems='flex-start'
        ></Grid>
        <Grid item>
          {props.activeDictionary && (
            <Typography variant='h4'>{props.activeDictionary.title}</Typography>
          )}
        </Grid>
        <Grid item>
          <Button onClick={getRandomWord} variant='contained'>
            Get Random Word
          </Button>
        </Grid>
        <Grid item>
          {wordAndDefinition && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>{wordAndDefinition.word}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{wordAndDefinition.definition}</Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

