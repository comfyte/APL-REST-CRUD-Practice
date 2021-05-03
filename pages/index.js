import { forwardRef, useEffect, useState, useRef } from "react";

const TableCell = forwardRef(({ children, editable }, ref) => {
    if (editable) {
        return (
            <td>
                <input type="text" defaultValue={children} ref={ref} />
            </td>
        );
    }
    
    return (
        <td>{children}</td>
    );
});

function EmployeeItem({ data, triggerRefresh }) {
    const [isEditing, setEditing] = useState(false);
    const [isSaving, setSaving] = useState(false);

    const namaRef = useRef();
    const posisiRef = useRef();

    function saveHandler() {
        if (!namaRef || !posisiRef) {
            return;
        }

        setSaving(true);
        fetch(`/api/employees/${data.id_karyawan}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nama: namaRef.current.value,
                posisi: posisiRef.current.value
            })
        })
            .then(() => {
                setSaving(false);
                setEditing(false);
                triggerRefresh();
            })
            .catch(err => {
                alert("Terjadi eror!");
                throw err;
            })
    }

    function deleteHandler() {
        const userResponse = confirm(`Yakin ingin menghapus entri karyawan dengan id ${data.id_karyawan}?`);
        if (!userResponse) {
            return;
        }

        fetch(`/api/employees/${data.id_karyawan}`, { method: "DELETE" })
            .then(() => {
                triggerRefresh();
            })
            .catch(err => {
                alert("Terjadi eror dalam menghapus data!");
                throw err;
            })
    }

    return (
        <tr>
            <td style={{ textAlign: "center" }}>{data.id_karyawan}</td>
            <TableCell editable={isEditing} ref={namaRef}>{data.nama}</TableCell>
            <TableCell editable={isEditing} ref={posisiRef}>{data.posisi}</TableCell>
            <td style={{ textAlign: "center" }}>
                {isEditing ? (
                    <>
                        <button type="button" onClick={saveHandler} disabled={isSaving}>Simpan</button>
                        <button type="button" onClick={() => {setEditing(false)}} disabled={isSaving}>Batal</button>
                    </>
                ) : (
                    <>
                        <button type="button" onClick={() => {setEditing(true)}}>Edit</button>
                        <button type="button" onClick={deleteHandler}>Hapus</button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default function EmployeesPage() {
    const [data, setData] = useState();

    async function refreshData() {
        const response = await fetch("/api/employees");
        const empData = await response.json();
        setData(empData);
    }

    useEffect(() => {
        refreshData();
    }, []);

    const newIdRef = useRef();
    const newNameRef = useRef();
    const newPositionRef = useRef();

    function newEntryHandler(ev) {
        ev.preventDefault();

        fetch("/api/employees", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id_karyawan: newIdRef.current.value,
                nama: newNameRef.current.value,
                posisi: newPositionRef.current.value
            })
        })
            .then(() => {
                refreshData();
                newIdRef.current.value = '';
                newNameRef.current.value = '';
                newPositionRef.current.value = '';
            })
            .catch(err => {
                alert("Terjadi eror dalam menambahkan data karyawan baru!");
                throw err;
            })
    }

    return (
        <main>
            <h1>Daftar Karyawan</h1>

            {data ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama Karyawan</th>
                                <th>Posisi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data
                                .sort((a, b) => a.id_karyawan - b.id_karyawan)
                                .map(emp => <EmployeeItem data={emp} triggerRefresh={refreshData} />)
                            }
                        </tbody>
                    </table>

                    <form onSubmit={newEntryHandler}>
                        <p>Tambah entri baru</p>

                        <label>
                            Id karyawan
                            <input type="number" ref={newIdRef} />
                        </label>

                        <label>
                            Nama
                            <input type="text" ref={newNameRef} />
                        </label>

                        <label>
                            Posisi
                            <input type="text" ref={newPositionRef} />
                        </label>

                        <button type="submit">Tambahkan</button>
                    </form>
                </>
            ) : (
                <p>Memuat data karyawan...</p>
            )}

            <style jsx global>{`
                html {
                    font-family: sans-serif;
                }

                main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                table {
                    border-collapse: collapse;
                    align-self: stretch;
                }

                th, td {
                    border: 1px solid gray;
                    padding: 0.25rem;
                }

                button {
                    margin: 0 0.2rem;
                }

                p {
                    font-weight: bold;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                
                label > input {
                    margin-left: 0.5rem;
                }
            `}</style>
        </main>
    );
}