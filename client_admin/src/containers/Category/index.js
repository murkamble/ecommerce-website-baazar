import React, { useEffect } from 'react';
import Layout from "../../components/Layout";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from '../../actions';

const Category = (props) => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());

    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for(let category of categories){
            myCategories.push(
                <li key={category.name}>
                    {category.name}
            {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>Category</h4>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            { renderCategories(category.categories) }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Category;