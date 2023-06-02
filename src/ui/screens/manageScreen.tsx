import { useForm } from "../../hooks";
import {
  Title,
  TextInput,
  Button,
  Preview,
  ContainerRadio,
  ColorInputs,
  ItemDiv,
  Section,
} from "../styles";
import arrowIcon from "../../assets/icons/arrowIcon.svg";
import { toast } from "react-toastify";
import { colors } from "../../constants/colors";

export function ManageScreen() {
  const { formData, handleChange } = useForm({
    statusName: "",
    color: colors[0],
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    if (formData.statusName === "") {
      toast.error("Adicione um nome ao status.");
    } else {
      toast.success("Status criado com sucesso!");
    }
  }

  function renderColors() {
    return colors.map((color) => (
      <ContainerRadio color={color} key={color}>
        <input
          type="radio"
          id="color"
          name="color"
          value={color}
          onChange={handleChange}
          checked={color === formData.color}
        />
        <div></div>
      </ContainerRadio>
    ));
  }

  return (
    <Section>
      <div>
        <span>Gerenciamento</span>
        <img src={arrowIcon} alt="icon flecha" />
        <span>Status</span>
      </div>

      <Title>Gerenciamento de status</Title>

      <ItemDiv row>
        <ItemDiv>
          <label htmlFor="statusName">Nome do status</label>
          <TextInput
            id="statusName"
            name="statusName"
            placeholder="Ex.: Aprovado"
            value={formData.statusName}
            onChange={handleChange}
            maxLength={13}
          />
        </ItemDiv>
        <ItemDiv>
          <span>Prévia</span>
          <Preview color={formData.color}>
            <span>{formData.statusName}</span>
          </Preview>
        </ItemDiv>
      </ItemDiv>

      <ItemDiv>
        <label>Cor</label>
        <ColorInputs>{renderColors()}</ColorInputs>
      </ItemDiv>

      <Button onClick={handleSubmit}>Criar status</Button>
    </Section>
  );
}
