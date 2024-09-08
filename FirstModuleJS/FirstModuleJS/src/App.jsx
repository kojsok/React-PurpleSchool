import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";

function App() {

  const data = [
    {
      title: "Подготовка к обновлению курса",
      text: "Горные походы открывают удивительные природные ландшафт",
      date: new Date()
    },
    {
      title: "Поход в горы",
      text: "Думал, что очень много времени",
      date: new Date()
    },
  ]
  

  return (
    <>
      <h1>Заголовок</h1>
      <p>Какойто текст</p>
      <Button />
      <CardButton>
        Новое воспоминание
      </CardButton>
      <CardButton> 
        <JournalItem title={data[0].title} text={data[0].text} date={data[0].date} />
      </CardButton>

      <CardButton> 
        <JournalItem title={data[1].title} text={data[1].text} date={data[1].date} />
      </CardButton>
      

    </>
  );
}

export default App;
