import { getSession, Session } from '@auth0/nextjs-auth0';

export default async function ProfileServer(): Promise<JSX.Element | null> {
    const session: Session | null = await getSession();

    if (!session || !session.user) return null;

    const { user } = session;

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col bg-sky-800">
            <div className="border-2 p-4 rounded-sm">
                <img
                    src={user.picture || ''}
                    alt={user.name || 'User'}
                    className="w-[300px] h-auto my-4 rounded-lg"
                />
                <h2 className="text-slate-200">
                    <strong>UserName: {user.name}</strong>
                </h2>
                <p className="text-slate-200 my-3">
                    <strong>Email: {user.email}</strong>
                </p>
                <button className="px-8 border-1 bg-orange-500 py-2 rounded-lg text-slate-200 hover:bg-violet-600 text-xl w-full">
                    Read More
                </button>
            </div>
        </div>
    );
}
