import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Article(props)
{
  return  <article>
  <h2> {props.title}</h2>
  {props.body}
 </article>
}




function Header(props)
{
  return <header>
       <h1><a href="/" onClick={(event)=>{
       event.preventDefault(); //리로드 방지
       props.onChangeMode();
       }}>{props.title}</a></h1>

     </header>
}
function Nav(props) {
  const lis = [
      ]
  for (let i =0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id ={t.id} href ={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
        //event.target=이 이벤트를 유발한 target
     // => 이건 function틀을 축약한방법 ()파라미터하나면생략가능

      }}>{t.title}</a>
      </li>)
  }
  return <nav>
  
  <ol>
    {lis}
  </ol>
</nav>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  //0은 읽을때 1은 바꿀때
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  // MODE나 SETMODE이름 바꿔도됨  SETHELLO 등으로해도됨
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
 if(mode === 'WELCOME') {
   content = <Article title="Welcome" body = "Hello, Web">
   </Article> 
 } else if(mode ==='READ') {
   let title, body = null;
   for(let i=0; i<topics.length; i++) {
     console.log(topics[i].id, id);
     if(topics[i].id ===id) {
     title = topics[i].title;
     body = topics[i].body;
     }
   }
   content = <Article title="Read" body = "Hello, Read">
     </Article> 
 }


  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
         setMode('Welcome');
        }
      }> </Header>

     <Nav topics ={topics} onChangeMode={(_id)=>{
          setMode('READ');
          setId(_id);
        }
      }></Nav>
     {content}
    </div>
  );
}

export default App;
