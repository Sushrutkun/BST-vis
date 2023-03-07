// Define the binary tree data structure
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a new node in the tree
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let current = this.root;

      while (true) {
        // if (value < current.value) 
        // if(flag==true)
        {
          if (!current.left) {
            current.left = node;
            current = current.left;
          }
          }  
          {
          if (!current.right) {
            current.right = node;
            current = current.right;
          }

        }
      }
    }
  
    // Draw the binary tree on the SVG canvas
    draw() 
    {
      const canvas = document.getElementById('tree-svg');
      canvas.innerHTML = '';
  
      if (!this.root) return;
  
      const queue = [{ node: this.root, x: 400, y: 50 }];
      let current;
  
      while (queue.length > 0) 
      {
        current = queue.shift();
  
        const cx = current.x;
        const cy = current.y;
        const r = 20;
  
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('class', 'node');
        canvas.appendChild(circle);
  
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', cx);
        text.setAttribute('y', cy + 6);
        text.textContent = current.node.value;
        canvas.appendChild(text);
  
        if (current.node.left) 
        {
          const leftChild = { node: current.node.left, x: cx - 100, y: cy + 75 };
          queue.push(leftChild);
  
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('class', 'arrow');
          path.setAttribute('d', `M${cx},${cy + r} L${leftChild.x},${leftChild.y - r}`);
          canvas.appendChild(path);
        }
  
        if (current.node.right) 
        {
          const rightChild = { node: current.node.right, x: cx + 100, y: cy + 75 };
          queue.push(rightChild);
  
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('class', 'arrow');
          path.setAttribute('d', `M${cx},${cy + r} L${rightChild.x},${rightChild.y - r}`);
          canvas.appendChild(path);
        }
        }
    } 
}

// Initialize the binary tree and draw it on the canvas
const tree = new BinaryTree();
function convertToArray() {
  const input = document.getElementById('input').value;
  const inputArray = input.split(' ');
  
  for(let i=0;i<inputArray.length;i++)
  {
      if(inputArray[i]!="NULL"||inputArray[i]!="null"||inputArray[i]!="N")
      {
          inputArray[i]=Number(inputArray[i]);
      }
  }
  console.log(inputArray);

  for(let i=0;i<inputArray.length;i++)
  {
    tree.insert(inputArray[i]);
  }
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(13);
// tree.insert(18);
  tree.draw();
}
