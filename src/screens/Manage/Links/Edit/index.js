import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'

import { linkGet } from '../../../../actions/LinkActions';
import FormGroup from '../../../../components/FormGroup';
import Layout from '../../../Layouts/Manage';
import FormCheck from '../../../../components/FormCheck';

const Edit = ({ link, linkGet }) => {
    const { id } = useParams();

    useEffect(() => {
        linkGet(id);
    }, [id, linkGet]);
    
    return (
        <Layout>
            <h1>Edit Link</h1>
            <div>
                <form action="">
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

export default connect(mapStateToProps, { linkGet })(Edit);