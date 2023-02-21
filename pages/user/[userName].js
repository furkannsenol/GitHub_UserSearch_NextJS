import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'next/image';
import * as Icon from 'react-bootstrap-icons';


const UserItem = ({ data, messageFound }) => {
  const router = useRouter()

  const dateFormat = (date) => {
    var dt = new Date(date);
    var dDay = dt.getDay();
    var dMonth = dt.getMonth();
    var dYear = dt.getFullYear();
    return dDay + "/" + dMonth + "/" + dYear
  }

  return (
    <Container>

      <h4>{messageFound}</h4>
      <Row className='d-flex justify-content-center'>
        <Col xs='3' className='text-center' >
          <Image className='rounded-circle text-center' src={data?.avatar_url} alt="" width={200} height={200} priority="true" ></Image><br /><br />
        </Col>
        <Col xs='5' className='mt-5' style={{ marginLeft: "-30px" }}>
          <h4 className='mt-3'> {data?.name}</h4>
          <span><a href={data?.html_url} className='text-secondary text-decoration-none'>  @{data?.login}</a></span>
        </Col>

      </Row>

      <Row className='d-flex justify-content-center'>
        <Col className='offset-md-5 px-3' xs={12}>
          <Icon.BriefcaseFill size={24} /> <span className='text-success'>{data?.company ? `${data?.company}` : `Not Available`}</span><br /><br />
          <Icon.GeoFill size={24} /><span className='text-success'> {data?.location ? `${data?.location}` : `Not Available`}</span><br /><br />
          <Icon.Link size={24} /><a href={data?.blog} className='text-success text-decoration-none'> {data?.blog ? `${data?.blog}` : `Not Available`}</a><br /><br />

          <Icon.Github size={24} /><a href={data?.html_url} className='text-success text-decoration-none'> {data?.html_url ? `${data?.html_url}` : `Not Available`}</a><br /><br />

          <Icon.FolderFill size={24} /><span className='text-success'> Public Repos : {data?.public_repos ? `${data?.public_repos}` : `Not Available`}</span><br /><br />
          <Icon.ListColumnsReverse size={24} /><span className='text-success'> Public Gists : {data?.public_gists ? `${data?.public_gists}` : `Not Available`}</span><br /><br />
          <Icon.HeartFill size={24} /><span className='text-success text-decoration-none'> Followers: {data?.followers ? `${data?.followers}` : `Not Available`}</span><br /><br />
          <Icon.PeopleFill size={24} /><span className='text-success text-decoration-none'> Following: {data?.following ? `${data?.following}` : `Not Available`}</span><br /><br />

          <Icon.CalendarCheckFill size={24} /><span className='text-success'> {data?.created_at ? `GitHub since ${dateFormat(data?.created_at)}` : `Not Available`}</span><br /><br />
        </Col>
      </Row>
      {/*
      <Tabs
        defaultActiveKey="follower"
        id="justify-tab-example"
        className="mb-3 "
        justify
      >
        <Tab eventKey="follower" title={`Followers (${data?.followers})`} >
          <h4>{data?.followers_url}</h4>
        </Tab>
        <Tab eventKey="following" title={`Following (${data?.following})`}>
          <h4>{data?.following_url}</h4>
        </Tab>
  </Tabs>*/}

    </Container>
  )
}

export default UserItem

export const getServerSideProps = async (context) => {
  try {
    const res = await fetch(`https://api.github.com/users/${context.params.userName}`)
    const data = await res.json()
    //console.log(context)

    if (data.message) { //when the request limit is opened
      return {
        notFound: true,
        //props: { messageFound: data?.message, data: [] }
      }
    }
    
    return { props: { data } }

  } catch {
    return { props: {} }
  }
}

