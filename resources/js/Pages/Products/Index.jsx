import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <>
            <GuestLayout>
                <Head title="Products" />

                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">Products</h1>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-lg bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-lg font-semibold">
                                Name: {product.name}
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Desc: {product.description}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Price: {product.price}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Category: {product.category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </GuestLayout>

            <AuthenticatedLayout>
                <Head title="Products" />

                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">Products</h1>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-lg bg-white p-6 shadow-sm"
                        >
                            <h2 className="text-lg font-semibold">
                                Name: {product.name}
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Desc: {product.description}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Price: {product.price}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                Category: {product.category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
