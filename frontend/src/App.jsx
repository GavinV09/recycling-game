import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GameContainer />
    </DndProvider>
  );
}

export default App;