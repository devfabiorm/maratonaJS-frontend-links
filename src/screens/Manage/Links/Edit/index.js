import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'

import { linkGet, linkUpdate } from '../../../../actions/LinkActions';
import { getFormData } from '../../../../helpers/form';

import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';

import Layout from '../../../Layouts/Manage';

const Edit = ({ link, linkGet }) => {
    const { id } = useParams();

    useEffect(() => {
        linkGet(id);
    }, [id, linkGet]);

    const submitHandler = e => {
        e.preventDefault();
        const data = getFormData(e);
        linkUpdate(id, data);
    }
    
    return (
        <Layout>
            <h1>Edit Link</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Label" name="label" type="text" data={link} />
                    <FormGroup label="Url" name="url" type="text" data={link} />
                    <FormCheck label="Is Social" name="isSocial" data={link} />
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return { link: state.link.link }
};

export default connect(mapStateToProps, { linkGet, linkUpdate })(Edit);