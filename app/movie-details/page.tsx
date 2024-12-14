'use client';

import { fetchMovieData } from '@/lib/redux/actions/movieActions';
import { RootState } from '@/lib/redux/store';
import { MovieDetails } from '@/lib/types/movie';
import { Loader2 } from 'lucide-react';
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MovieDetailsPage: NextPage = () => {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const { selectedMovie, loading } = useSelector(
        (state: RootState) => state.movies
    );

    const id = searchParams.get('id');

    const movie: MovieDetails | null = selectedMovie;

    useEffect(() => {
        dispatch(fetchMovieData(Number(id)));
    }, [id])


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (movie == null) {
        return
    } else {
        return (
            <div className="bg-gray-900 text-white min-h-screen">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative text-center">
                        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                        <p className="italic text-lg">{movie.tagline}</p>
                    </div>
                </section>

                {/* Details Section */}
                <section className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="col-span-2 space-y-4">
                        <p>
                            <span className="font-bold">Release Date:</span>{' '}
                            {new Date(movie.release_date).toLocaleDateString()}
                        </p>
                        <p>
                            <span className="font-bold">Budget:</span> ${movie.budget.toLocaleString()}
                        </p>
                        <p>
                            <span className="font-bold">Revenue:</span> ${movie.revenue.toLocaleString()}
                        </p>
                        <p>
                            <span className="font-bold">Genres:</span>{' '}
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="inline-block bg-blue-500 text-sm rounded-full px-3 py-1 mr-2"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </p>
                        <p>
                            <span className="font-bold">Runtime:</span> {movie.runtime} minutes
                        </p>

                    </div>
                </section>

                {/* Overview Section */}
                <section className="max-w-6xl mx-auto py-6 px-6">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-300">{movie.overview}</p>
                </section>

                {/* Production Section */}
                <section className="max-w-6xl mx-auto py-10 px-6">
                    <h2 className="text-2xl font-bold mb-4">Production Companies</h2>
                    <div className="flex flex-wrap gap-6">
                        {movie.production_companies.map((company) => (
                            <div key={company.id} className="text-center">
                                {company.logo_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                        alt={company.name}
                                        className="h-20 mx-auto mb-2"
                                    />
                                ) : (
                                    <div className="h-20 bg-gray-700 text-gray-500 flex items-center justify-center">
                                        No Logo
                                    </div>
                                )}
                                <p>{company.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
};

export default MovieDetailsPage;
