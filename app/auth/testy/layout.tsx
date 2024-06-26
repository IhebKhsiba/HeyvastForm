const AuthLayout = ({
    children

}: {
    children: React.ReactNode
}) => {
    return (
        <div className=" flex items-center justify-center bg-gradient-to-b from-purple-600 to-blue-800">
            {children}
        </div>
    )
}

export default AuthLayout