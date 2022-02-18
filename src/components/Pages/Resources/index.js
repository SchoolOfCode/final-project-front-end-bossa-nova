import { LinkPreview } from "@dhaiwat10/react-link-preview";
import styles from "./Resources.module.css";
import { useState, useEffect } from "react";
import data from "../../resourcesData";

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
  }, [filter]);

  return (
    <div className="resources">
      <header className="resources-header">
        <a href="/#" active={filter === "all"} onClick={() => setFilter("all")}>
          ALL
        </a>
        <a
          href="/#"
          active={filter === "backend"}
          onClick={() => setFilter("backend")}
        >
          BACKEND
        </a>
        <a
          href="/#"
          active={filter === "js-library"}
          onClick={() => setFilter("js-library")}
        >
          JS LIBRARY
        </a>
        <a
          href="/#"
          active={filter === "styling"}
          onClick={() => setFilter("styling")}
        >
          STYLING
        </a>
        <a
          href="/#"
          active={filter === "html"}
          onClick={() => setFilter("html")}
        >
          HTML
        </a>
      </header>
      <div className="link-list">
        {resourceLink.map((resourceLink) =>
          resourceLink.filtered === true ? (
            <LinkPreview url={resourceLink.link} width="250px" height="350px" />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Resources;
