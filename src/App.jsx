import {useState} from 'react';
import {Main} from './components/StyledComponents';
import {faqs} from './faqs';
import {Card} from './components/Card';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <Main>
      {
        faqs.map(faq => <Card currentId={currentId} setCurrentId={setCurrentId} key={faq.id} {...faq} />)
      }
    </Main>
  )
}

export default App
