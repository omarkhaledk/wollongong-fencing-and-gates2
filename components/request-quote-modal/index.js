import React, { useState, useEffect } from 'react';

import Modal from '../modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { submitQuote } from '../../pages/api';

import styles from './styles.module.css';

const FIELDS = [
    { component: TextField, props: { id: 'service', label: 'Service', required: true } },
    { component: TextField, props: { id: 'when', label: 'When', required: true } },
    { component: TextField, props: { id: 'serviceLocation', label: 'Service Location', required: true } },
    { component: TextField, props: { id: 'mobileNumber', label: 'Mobile Number', required: true, value: '+61' } },
    { component: TextField, props: { id: 'details', label: 'Details', multiline: true, rows: 4 } },
];

export default function RequestQuoteModal(props) {
    const [requestValues, setRequestValues] = useState({});
    const [canSubmit, setCanSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateFields = () => {
        let isValid = true;

        FIELDS.map(f => {

            if (f.props.id === 'mobileNumber' && (!requestValues.mobileNumber || !requestValues.mobileNumber.substring(3))) {
                isValid = false;
            }

            else if (f.props.required && !requestValues[f.props.id]) {
                isValid = false;
            }

        });

        setCanSubmit(isValid);
    }

    useEffect(() => {
        validateFields();
    }, [requestValues]);

    const {
        showModal,
        onModalClose
    } = props;

    if (!showModal) return "";

    const formattedMobileNumber = (value) => {
        const regex = new RegExp('^[0-9]*$');

        if (!regex.test(value.substring(3)))
            return requestValues.mobileNumber;

        if (!value.includes('+61'))
            return '+61';

        return value;
    }

    const onChange = (value, fieldName) => {
        const updatedRequestValues = { ...requestValues };

        if (fieldName === 'mobileNumber') {
            updatedRequestValues[fieldName] = formattedMobileNumber(value);
        }
        else {
            updatedRequestValues[fieldName] = value;
        }

        setRequestValues(updatedRequestValues);
    }

    const onSubmit = () => {
        setLoading(true);

        submitQuote(requestValues).then(response => {
            if (response.success) {
                setRequestValues({});
                onModalClose();
            }
        }).finally(() => setLoading(false));
    }

    const onCancel = () => {
        setRequestValues({});
        onModalClose();
    }

    return (
        <Modal open={showModal} onClose={onModalClose} narrow>
            <Typography variant="h5" gutterBottom className={styles.title}>Request a Quote</Typography>
            <form className={styles.form} autoComplete="off">

                <div>
                    {FIELDS.map(field =>
                        <div className={styles.field} key={field.props.id}>
                            <field.component
                                {...field.props}
                                fullWidth
                                variant="outlined"
                                onChange={(event) => onChange(event.target.value, field.props.id)}
                                value={requestValues[field.props.id] || field.props.value || ""}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.actionsContainer}>
                    <Button color="primary" onClick={onCancel}>Cancel</Button>

                    <div className={styles.submitBtnContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onSubmit}
                            disabled={!canSubmit || loading}
                        >Submit</Button>
                        {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
                    </div>
                </div>

            </form>
        </Modal>
    );
}