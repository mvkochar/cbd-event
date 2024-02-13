import React from 'react'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Top from './components/Top/Top'


const App = () => {
  const [page, setPage] = React.useState(1)
 const handlePage = (pageNum: number) => setPage(pageNum) 

  return (
    <>
      <Top pageNum={page} />
      <Main handlePage={handlePage} />
      <Footer />
    </>
  )
}

export default App;
