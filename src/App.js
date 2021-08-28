import './App.css';
import { Face } from './Face'; 
import { range } from 'd3-array';

const width = 166;
const height = 166;

const array = range(6*3)

function App() {
  return (
    array.map(() => (
      <Face
        width = {width}
        height = {height}
        centerX = {width / 2}
        centerY = {height / 2}
        strokeWidth = {10}
        eyeOffsetX = {20 + Math.random() * 9}
        eyeOffsetY = {20 + Math.random() * 15}
        eyeRadius = {5 + Math.random() * 10}
        mouthWidth = {7 + Math.random() * 9}
        mouthRadius = {30 + Math.random() * 10}
      />
    ))
    
  );
}

export default App;
