export const ProjectForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
        <input type="number" placeholder="Insira o orçamento total" />
        <select name="category_id">
          <option disabled>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar Projeto" />
      </div>
    </form>
  );
};
