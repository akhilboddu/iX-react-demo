import React, { Component } from 'react'
import { Header, Footer } from '../Layout'
import Listings from './Listings'
import api from '../../api'

class HomePage extends Component {

    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        api.get('/posts')
            .then(response => {
                this.setState({
                    posts: response.data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({ loading: false })
                alert('Listings not retrieved! Please check your internet connection or try again later.')
                console.log(err)
            })
    }
    
    render() {
        return (
            <div>
                <Header title="HELLO WORLD"/>   
                <Listings listings={this.state.posts} loading={this.state.loading} />
                <Footer />
            </div>
        )
    }
}

export default HomePage
