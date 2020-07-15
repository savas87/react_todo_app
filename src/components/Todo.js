import React, { useState } from "react";
import { List, ListItemText, ListItem, Button, Modal } from "@material-ui/core";
import db from "../connect/firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const deleteItem = (event) => {
    db.collection("todos").doc(props.todo.id).delete();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Close</Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText
            secondary={props.todo.todo}
            primary="Todo"
          ></ListItemText>
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <Button onClick={deleteItem} variant="contained" color="secondary">
          Delete
        </Button>
      </List>
    </>
  );
}
export default Todo;
