const API_URL = "https://sachadigi.com/limanplatform";
//const API_URL= "http://localhost:3000/limanplatform"
const dataProvider = {
    getList: async (resource) => {
        if (resource === "questions") {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_URL}/quiz`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            return { data, total: data.length };
        }
        if (resource === "tokens") {
                    const token = localStorage.getItem("token");
                    const company = localStorage.getItem("comp");
                    const res = await fetch(`${API_URL}/token/`, {
                        headers: { Authorization: `Bearer ${token}`,"comp": company }
                    });
                    const data = await res.json();
                    return { data, total: data.length };
                }
        return { data: [], total: 0 };
    },

    getOne: async (resource, params) => {
        if (resource === "questions") {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_URL}/admin/question/${params.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            return { data };
        }
        if (resource === "tokens") {
                    const token = localStorage.getItem("token");
                    const company = localStorage.getItem("comp");
                    const res = await fetch(`${API_URL}/token/${params.id}`, {
                        headers: { Authorization: `Bearer ${token}`,"comp": company },
                    });
                    const data = await res.json();
                    return { data };
                }
    },

    create: async (resource, params) => {
        if (resource === "questions") {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            const questions = [
                { en: params.data.question?.en, fr: params.data.question?.fr, nl: params.data.question?.nl }
            ];
            const explanations = [
                            { en: params.data.explanation?.en, fr: params.data.explanation?.fr, nl: params.data.explanation?.nl }
                        ];
            const options = [
                { en: params.data.optionA?.en, fr: params.data.optionA?.fr, nl: params.data.optionA?.nl },
                { en: params.data.optionB?.en, fr: params.data.optionB?.fr, nl: params.data.optionB?.nl },
                { en: params.data.optionC?.en, fr: params.data.optionC?.fr, nl: params.data.optionC?.nl },
                { en: params.data.optionD?.en, fr: params.data.optionD?.fr, nl: params.data.optionD?.nl },
            ];

            const answerMap = { A: 0, B: 1, C: 2, D: 3 };
            const correct_option = answerMap[params.data.answer];
            formData.append("level", params.data.level);
            formData.append("explanation", JSON.stringify(explanations));
            formData.append("question", JSON.stringify(questions));
            formData.append("options", JSON.stringify(options));
            formData.append("correct_option", correct_option);
            if (params.data.image && params.data.image.rawFile) {
                formData.append("image", params.data.image.rawFile);
            }
            const res = await fetch(`${API_URL}/admin/question`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });
            const data = await res.json();
            return { data };
        }
        if (resource === "tokens") {
            const token = localStorage.getItem("token");
            const company = localStorage.getItem("comp");
            const res = await fetch(`${API_URL}/token/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // remove if not required
              },
              body: JSON.stringify({
                email: params.data.email,
                code: params.data.code,
                comp: company
              }),
            });

            if (!res.ok) {
              throw new Error("Request failed");
            }
            const data = await res.json();
            return { data };
          }
    },

    update: async (resource, params) => {uii
        if (resource === "questions") {
            const token = localStorage.getItem("token");
            const formData = new FormData();

            const questions = [
                { en: params.data.question?.en, fr: params.data.question?.fr, nl: params.data.question?.nl }
            ];

            const explanations = [
                            { en: params.data.explanation?.en, fr: params.data.explanation?.fr, nl: params.data.explanation?.nl }
                        ];

            const options = [
                { en: params.data.optionA?.en, fr: params.data.optionA?.fr, nl: params.data.optionA?.nl },
                { en: params.data.optionB?.en, fr: params.data.optionB?.fr, nl: params.data.optionB?.nl },
                { en: params.data.optionC?.en, fr: params.data.optionC?.fr, nl: params.data.optionC?.nl },
                { en: params.data.optionD?.en, fr: params.data.optionD?.fr, nl: params.data.optionD?.nl },
            ];

            const answerMap = { A: 0, B: 1, C: 2, D: 3 };
            const correct_option = answerMap[params.data.answer];

            formData.append("level", params.data.level);
            formData.append("explanation", JSON.stringify(explanations));
            formData.append("question", JSON.stringify(questions));
            formData.append("options", JSON.stringify(options));
            formData.append("correct_option", correct_option);

            if (params.data.image && params.data.image.rawFile) {
                formData.append("image", params.data.image.rawFile);
            }

            const res = await fetch(`${API_URL}/admin/question/${params.id}`, {
                method: "PUT",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });
            const data = await res.json();
            return { data };
        }
        if (resource === "tokens") {
                    const token = localStorage.getItem("token");
                    const res = await fetch(`${API_URL}/token/`, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // remove if not required
                      },
                      body: JSON.stringify({
                        email: params.data.email,
                        code: params.data.code
                      }),
                    });

                    if (!res.ok) {
                      throw new Error("Request failed");
                    }
                    const data = await res.json();
                    return { data };
                  }
    },

    delete: async (resource, params) => {
        if (resource === "questions") {
            const token = localStorage.getItem("token");
            await fetch(`${API_URL}/admin/question/${params.previousData.level}/${params.id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            return { data: params.previousData };
        }
         if (resource === "tokens") {
             const token = localStorage.getItem("token");
             const company = localStorage.getItem("comp");
             await fetch(`${API_URL}/token/${params.id}`, {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${token}`,"comp": company },
                    });
                    return { data: params.previousData };
         }
    }
};

export default dataProvider;
