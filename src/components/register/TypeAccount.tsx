import { CreditCardIcon, DollarSignIcon, WalletCardsIcon } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RoleEnum } from "@/enum/RoleEnum";
import i18next from "i18next";
import { useDispatch } from "react-redux";
import { register } from "module";

const TypeAccount = ({ form, data }) => {
    const dispatch = useDispatch()

    return (
        <div>

            <Card>
                <CardHeader>
                    <CardTitle>Account type</CardTitle>
                </CardHeader>data
                <CardContent className="space-y-4">
                    <RadioGroup defaultValue="buyer"
                        className="grid grid-cols-2 gap-4"
                        onValueChange={(e) => {
                            dispatch({
                                type: "register",
                                payload: { key: "role", value: e }
                            });
                        }}
                    >

                        <div>
                            <RadioGroupItem
                                value={RoleEnum.BUYER.toString()}
                                id="buyer"
                                className="peer sr-only"


                            />
                            <Label
                                htmlFor="buyer"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <WalletCardsIcon className="mb-3 h-6 w-6" />
                                Buyer
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value={RoleEnum.SELLER.toString()} id="seller"
                                className="peer sr-only"

                            />
                            <Label
                                htmlFor="seller"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <CreditCardIcon className="mb-3 h-6 w-6" />
                                Seller
                            </Label>
                        </div>

                    </RadioGroup>

                    <Input
                        placeholder='Company name'

                        onChange={(e) => dispatch({
                            type: "register",
                            payload: { key: "company_name", value: e.target.value }
                        })}
                    />


                    <Select onValueChange={(e) =>
                        dispatch({
                            type: "register",
                            payload: { key: "specialitie_id", value: e }
                        })
                    }>
                        <SelectTrigger >
                            <SelectValue placeholder="Select a specialitie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Specialitie</SelectLabel>
                                {data.map((item) => (
                                    <SelectItem key={item.id} value={item.id}>{item.name[i18next.language]}</SelectItem>
                                ))}

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>

        </div>
    );
}

export default TypeAccount;