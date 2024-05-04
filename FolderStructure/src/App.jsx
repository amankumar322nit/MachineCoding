import { useState } from 'react'
import { Folder } from './folder';

export const data = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "Folder.js",
          isFolder: false,
        },
        {
          name: "data.js",
          isFolder: false,
        },
        {
          name: "Index.js",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Folder folder={data} />
    </>
  )
}

export default App
