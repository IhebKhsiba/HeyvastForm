"use client"

import { admin } from "@/actions/admin"
import { Button } from "@/components/ui/button"
import { RoleGate } from "@/components/auth/role-gate"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { FormSuccess } from "@/components/form-success"
import { UserRole } from "@prisma/client"
import { toast } from "sonner"
const AdminPage = () => {
    const onServerActionClick = () => {
        admin()
           .then((data) => {
            if (data.error) {
                toast.error(data.error)
            }

            if (data.success) {
                toast.success(data.success)
            }
           })
    }
    const onApiRouteClick = () => {
        fetch("api/admin")
        .then((response) => {
            if(response.ok){
                toast.success("Allowed API route!")
        }else {
            toast.error("Forbidden API route!")
        }
        })
    }
    
    return (
        <Card className="w-[600px]">
            <CardHeader>
            <p className="text-2xl font-semibold text-center">
            Admin
            </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate  allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="Vous avez le droit d'accéder à cette page" />

                    
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin Only Api-Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to Test
                    </Button>

                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin Only ServerAction
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to Test
                    </Button>

                </div>
            </CardContent>
        </Card>
    )
}
export default AdminPage