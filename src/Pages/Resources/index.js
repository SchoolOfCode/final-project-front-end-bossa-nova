import { LinkPreview } from "@dhaiwat10/react-link-preview";
import styles from "./Resources.module.css";
import { useState, useEffect } from "react";
import data from "./../resourcesData";

function Resources() {
  const [filter, setFilter] = useState("all");
  const [resourceLink, setResourceLink] = useState(data);

  useEffect(() => {
    setResourceLink(data);
  }, []);

  useEffect(() => {
    setResourceLink([]);

    const filtered = resourceLink.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setResourceLink(filtered);
  }, [filter, resourceLink]);

  return (
    <div className={styles.resources}>
      <header className={styles.resourcesHeader}>
        <h3
          className={styles.pointer}
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          ALL
        </h3>
        <h3
          className={styles.pointer}
          active={filter === "backend"}
          onClick={() => setFilter("backend")}
        >
          BACKEND
        </h3>
        <h3
          className={styles.pointer}
          active={filter === "js-library"}
          onClick={() => setFilter("js-library")}
        >
          JS LIBRARY
        </h3>
        <h3
          className={styles.pointer}
          active={filter === "styling"}
          onClick={() => setFilter("styling")}
        >
          STYLING
        </h3>
        <h3
          className={styles.pointer}
          active={filter === "html"}
          onClick={() => setFilter("html")}
        >
          HTML
        </h3>
      </header>
      <div className={styles.linkList}>
        {resourceLink.map((resourceLink, index) =>
          resourceLink.filtered === true ? (
            <LinkPreview
              key={index}
              url={resourceLink.link}
              width="250px"
              height="350px"
              fallbackImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
              imageHeight="50%"
              descriptionLength="100"
              openInNewTab="true"
              margin="5px"
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Resources;
