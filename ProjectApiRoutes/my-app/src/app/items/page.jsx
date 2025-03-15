import { Suspense } from 'react';
import ItemList from './ItemList';
import LoadingSpinner from './LoadingSpinner';

export default function HomeItems() {
    return (
        <div>
            <h1>Items Page</h1>
            <Suspense fallback={<LoadingSpinner />}>
                <ItemList />
            </Suspense>
        </div>
    );
}
