import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactDetails, ContactForm, Section, BoldParagraph, Form } from './styles';
import { useIntl } from 'gatsby-plugin-intl';

const ContactBody = () => {
    const intl = useIntl();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <Section>
            <h1>
                {intl.formatMessage({
                    id: `contact.header`,
                })}
            </h1>
            <ContactDetails>
                <h2>
                    {intl.formatMessage({
                        id: `contact.block1.title`,
                    })}
                </h2>
                <BoldParagraph>
                    {intl.formatMessage({
                        id: `contact.block1.subtitle1`,
                    })}
                </BoldParagraph>
                <p>
                    {intl.formatMessage({
                        id: `contact.block1.desc1`,
                    })}
                </p>
                <BoldParagraph>
                    {intl.formatMessage({
                        id: `contact.block1.subtitle2`,
                    })}
                </BoldParagraph>
                <p>
                    {intl.formatMessage({
                        id: `contact.block1.desc2`,
                    })}
                </p>
                <BoldParagraph>
                    {intl.formatMessage({
                        id: `contact.block1.subtitle3`,
                    })}
                </BoldParagraph>
                <p>
                    {intl.formatMessage({
                        id: `contact.block1.desc3`,
                    })}
                </p>
                <p>
                    {intl.formatMessage({
                        id: `contact.block1.desc4`,
                    })}
                </p>
            </ContactDetails>
            <ContactForm>
                <h2>
                    {intl.formatMessage({
                        id: `contact.block2.title`,
                    })}
                </h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">
                        <p>
                            {intl.formatMessage({
                                id: `contact.block2.subtitle1`,
                            })}
                        </p>
                        <input
                            type="text"
                            name="name"
                            defaultValue=""
                            ref={register({ required: true })}
                        />
                        {errors.name && (
                            <span>
                                {intl.formatMessage({
                                    id: `contact.block2.error`,
                                })}
                            </span>
                        )}
                    </label>
                    <label htmlFor="email">
                        <p>
                            {intl.formatMessage({
                                id: `contact.block2.subtitle2`,
                            })}
                        </p>
                        <input
                            type="email"
                            name="email"
                            defaultValue=""
                            ref={register({ required: true })}
                        />
                        {errors.email && (
                            <span>
                                {intl.formatMessage({
                                    id: `contact.block2.error`,
                                })}
                            </span>
                        )}
                    </label>
                    <label htmlFor="text">
                        <p>
                            {intl.formatMessage({
                                id: `contact.block2.subtitle3`,
                            })}
                        </p>
                        <textarea
                            name="message"
                            defaultValue=""
                            ref={register({ required: true })}
                        />
                        {errors.message && (
                            <span>
                                {intl.formatMessage({
                                    id: `contact.block2.error`,
                                })}
                            </span>
                        )}
                    </label>
                    <button type="submit">
                        {intl.formatMessage({
                            id: `contact.block2.button`,
                        })}
                    </button>
                </Form>
            </ContactForm>
        </Section>
    );
};

export default ContactBody;
