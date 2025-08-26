import MyDatePicker from "@/components/MyDatePicker";

export const dynamic = 'force-dynamic'

function Page1() {
    const fecha = new Date()
    console.log(fecha.toISOString());

    return (
        <>
            <p>{fecha.toISOString()}</p>
            <MyDatePicker />
            <input type="date"
                defaultValue="2024-07-22"
                min="2024-01-01"
                max="2024-12-31" />
            <input type="datetime-local" />
        </>
    );
}

export default Page1;