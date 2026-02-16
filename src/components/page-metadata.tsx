'use client';
import { useEffect } from 'react';
import { useLanguage } from './language-provider';
import { content } from '@/lib/content';

export default function PageMetadata() {
    const { language } = useLanguage();

    useEffect(() => {
        document.title = content[language].title;
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', content[language].description);
        }
    }, [language]);

    return null;
}
