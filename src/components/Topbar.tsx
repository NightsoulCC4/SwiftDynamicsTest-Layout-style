import React from 'react'
import { useTranslation } from 'react-i18next'
import "../stylesheets/Topbar.scss"
import { Select } from 'antd';

export default function Topbar() {
    const { t, i18n } = useTranslation();
    return (
        <div className="topbar">
            <h1 className="topbar-topic">
                {t('header')}
            </h1>
            <Select className="change-language" defaultValue="EN"
                style={{ width: 70 }}
                onChange={(value) => {
                    i18n.changeLanguage(value)
                    // console.log(value)
                }}
                options={[
                    {
                        value: 'en',
                        label: 'EN',
                    },
                    {
                        value: 'th',
                        label: 'TH',
                    },
                ]} />
        </div>
    )
}
