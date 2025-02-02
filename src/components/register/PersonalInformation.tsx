import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RootState } from "@/store";
import { register } from "@/store/slices/registerSlice";

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
                    defaultValue={data.company_logo}
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
                <Input name="city" onChange={(e) => handleChange(e)}
                    defaultValue={data.city}
                />
            </Label>
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