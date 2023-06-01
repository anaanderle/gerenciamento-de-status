import { TextInput, Title } from "../components";
import { useForm } from "../../hooks";

const colors = [
  "#009BFF",
  "#0046FF",
  "#6356EE",
  "#8850E1",
  "#8741B1",
  "#BF6CCF",
  "#CA5E97",
  "#ED92A8",
  "#B63954",
  "#CA5646",
  "#DF9655",
  "#EBD067",
  "#A8C74A",
  "#92CC82",
  "#00FFC4",
  "#1E1E1E",
  "#8D969D",
  "#D2D2D2",
  "#E8E8E8",
  "#F4F4F4",
];

export function ManageScreen() {
  const { formData, handleChange } = useForm({
    statusName: "",
    color: "009BFF",
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    console.log("toastr aqui");
  }

  return (
    <section>
      <div>
        <span>Gerenciamento</span>
        <span>Status</span>
      </div>
      <Title />
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nome do status"
          name="statusName"
          placeholder="Ex.: Aprovado"
          value={formData.statusName}
          handleChange={handleChange}
        />
        <label>Cor</label>
        {colors.map((color) => (
          <input
            type="radio"
            id="cor"
            name="cor"
            value={color}
            onChange={handleChange}
          />
        ))}
        <button>Criar status</button>
      </form>
    </section>
  );
}
