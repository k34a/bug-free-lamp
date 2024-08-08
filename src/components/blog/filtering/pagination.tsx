import Link from "next/link";

interface PaginationProps {
    value: number;
    totalPages: number;
}

const Pagination = (props: PaginationProps) => {
    return (
        <nav className="flex items-center justify-center gap-6 py-12">
            {props.value > 1 && (
                <Link
                    href={`/blog/page/${props.value - 1}`}
                    className="bg-slate-800 text-white rounded-lg px-4 py-1 disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                    Prev
                </Link>
            )}
            <div>
                {props.value} / {props.totalPages}
            </div>
            {props.value < props.totalPages && (
                <Link
                    href={`/blog/page/${props.value + 1}`}
                    className="bg-slate-800 text-white rounded-lg px-4 py-1 disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                    Next
                </Link>
            )}
        </nav>
    );
};

export default Pagination;
