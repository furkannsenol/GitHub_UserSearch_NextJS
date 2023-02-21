import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import styles from '../styles/Index.module.css'


const  index =  ({ data, messageFound })  => {
  const  router = useRouter()

  const [currentPage, setCurrentPage] = React.useState(1)
  const [postPerPage, setPostPerPage] = React.useState(8)

  const lastPostIndex = currentPage * postPerPage //1*10
  const firstPostIndex = lastPostIndex - postPerPage //20-10
  const currentPost = data?.slice(firstPostIndex, lastPostIndex)
  const totalPosts = data?.length

  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }

  const topOfPage = () => {
    window.scrollTo(0, 0)
  }
  return (

    <div>

    
<style jsx>{`
    .active>.page-link, .page-link.active {
      background-color: #198754;
      color:white;
      border-color:#198754;
    }
    .page-link{
      color:#198754;
    }
  `}</style>
      <Container>
        <h4>{messageFound}</h4>
        <h4>{firstPostIndex + 1} - {lastPostIndex} User List</h4><br />

        {/*Data List*/}
        <Row>

          {currentPost?.map((user) => (
            <Col xs={3} key={user?.id}>
              <Card style={{ width: '15rem', marginBottom: 30}} >
                <Image alt='user image'  width={238} height={238} priority  src={user?.avatar_url} onClick={e => router.push(`user/${user?.login}`)} style={{ cursor: 'pointer' }} />
                <Card.Body className='text-center'>
                  <Card.Title  onClick={e => router.push(`user/${user?.login}`)} style={{ cursor: 'pointer' }}>{user?.login}</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <div className="d-grid">
                  <Button variant="success" target='_blank' href={user?.html_url} >GitHub Profile</Button></div>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
        {/*Pagination*/}
        <Row style={{marginTop:30}}>
          <Col>
            <nav >
              <ul className={`pagination justify-content-center pagination-lg `} style={{ cursor: 'pointer' }} >
                {pageNumbers.map(number => (
                  <li key={number} className="page-item" >
                    <a onClick={() => { setCurrentPage(number); topOfPage(); }}
                      className={number == currentPage ? 'active page-link' : 'page-link'}>{number}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users?per_page=100")
    const data = await res.json()

    if (data.message) { //when the request limit is opened
      return {
        props: { messageFound: data.message, data: [] }
      }
    }

    return { props: { data } }

  } catch (e) {
    //console.log(e)
    return { props: { messageFound : 'API DOWN' } }
  }

}