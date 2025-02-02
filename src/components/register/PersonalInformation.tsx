import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RootState } from "@/store";
import { register } from "@/store/slices/registerSlice";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import Cities from "@/data/cities.json";
const PersonalInformation = ({ form }) => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.register);
    const handleChange = (e) => {
        console.log("e", e.target.value)
        dispatch(register({ key: e.target.name, value: e.target.value }));
    }
    return (
        <>
            <Label>
                Upload Image
                <Input type="file" className="mt-2"
                    name="company_logo"
                    onChange={(e) => handleChange(e)}
                />
            </Label>
            <Label>
                First Name
                <Input name="first_name"
                    onChange={(e) => handleChange(e)}
                    defaultValue={data.first_name}

                />
            </Label>
            <Label>
                Last Name
                <Input name="last_name" onChange={(e) => handleChange(e)}
                    defaultValue={data.last_name}

                />
            </Label>
            <Label>
                Phone
                <Input name="phone" type="tel"
                    onChange={(e) => handleChange(e)}
                    defaultValue={data.phone}

                />
            </Label>
            <Label>
                Email
                <Input name="email" type="email" onChange={(e) => handleChange(e)}
                    defaultValue={data.email}
                />
            </Label>
            <Label>
                City

                <Select
                    name="city_id"
                    onValueChange={(e) => dispatch(register({ key: 'city_id', value: e }))}
                    defaultValue={data.city_id}
                >


                    <SelectTrigger >
                        <SelectValue placeholder="Select a City" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>City</SelectLabel>

                            {Cities.map((city) => (
                                <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                            ))}

                        </SelectGroup>
                    </SelectContent>
                </Select>

            </Label >
            <Label>
                Address
                <Input name="address" type="text" onChange={(e) => handleChange(e)}
                    defaultValue={data.address}
                />
            </Label>
            <Label>
                Password
                <Input name="password" type="password" onChange={(e) => handleChange(e)}
                    defaultValue={data.password}
                />
            </Label>
            <Label className="flex items-center space-x-2 mt-4">
                <Checkbox name="acceptTerms"
                    // onCheckedChange={
                    //     (e) => dispatch(register({ key: 'agreement', value: e.target.checked }))
                    // }

                    defaultChecked={data?.agreement}
                />
                <span>I accept the terms and conditions</span>
            </Label>
        </>
    );
}

export default PersonalInformation;