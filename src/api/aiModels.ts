async function deleteModel(modelName: string) {
  const response = await fetch(`AIModels/DeleteModel/?modelName=${modelName}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  if (!response.ok) {
    const responseText = await response.json();
    alert(responseText);
  }
}

async function addAIModel(formData: FormData) {
  const response = await fetch('AIModels/AddAIModel', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      // 'Content-Disposition': 'form-data; name="file"; filename="AISingleNumberModel.onnx"',
    },
    body: formData,
  });

  if (response.ok) return;
  alert(response.statusText);
}

interface Models {
  id: number;
  name: string;
}

async function getMyModels(): Promise<Models[]> {
  const response = await fetch('AIModels/GetMyModels', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  const models: Models[] = await response.json();

  return models;
}

export {
  getMyModels, addAIModel, deleteModel, Models,
};
