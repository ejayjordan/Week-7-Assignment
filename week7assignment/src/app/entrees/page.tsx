//Found a way to utilize useEffect from this link: https://www.google.com/search?sca_esv=28f8fab5923385a6&sxsrf=ADLYWILa9r_lLIXXS3VEeCf4b77sHjFvAg:1729031899956&q=how+to+use+react+useeffect+to+fetch+a+text+file+next+js&spell=1&sa=X&ved=2ahUKEwjY487huZGJAxWuLtAFHbxmOhgQBSgAegQICxAB&biw=1536&bih=825&dpr=2
'use client'
import { useState, useEffect } from 'react';

export default function Entrees() {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('entrees.txt');
      const data = await response.text();
      setText(data);
    };

    fetchData();
  }, []);

  return (
    <>
    <ul>
    <li>
      {text}
    </li>
    </ul>
    </>
  );
}