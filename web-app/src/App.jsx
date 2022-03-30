import { useState } from 'react'
import './App.css'
import {Button, Container, createStyles, Group, Text, TextInput, useMantineTheme} from "@mantine/core";
import aiModel from "./model/model-bad-bunny.json";
import * as brain from 'brain.js';


const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colors.dark[8],
    height: '100vh',
  },

  inner: {
    position: 'relative',
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
      } !important`,
    },
  },
}));

function App() {
  const [count, setCount] = useState(0)
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const ai = new brain.recurrent.GRU();
  ai.fromJSON(aiModel);

  const run1 = ai.run('sexo');
  const run2 = ai.run('De tener');
  const run3 = ai.run('La cosa');


  console.log('run 1:' + run1);
  console.log('run 2:' + run2);
  console.log('run 3:' + run3);



  return (
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'cyan' }} inherit>
              EL BAD ROBOT
            </Text>
          </h1>

          <Text className={classes.description} color="white">
            This is an AI Model trained on Bad Bunny's lyrics. Type in some text...in spanish.
          </Text>

          <Text className={classes.description} color="white">
            {output}
          </Text>

          <TextInput
              placeholder="Ey!"
              required
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              mt="md"
              autoComplete="nope"
          />

          <Group className={classes.controls}>
            <Button
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={{ from: 'red', to: 'cyan' }}
                onClick={() => setOutput(ai.run(value))}
            >
              Ey!
            </Button>

          </Group>
        </Container>
      </div>
  )
}

export default App
