import React, { useState } from "react";
import { Divider, Avatar, makeStyles, createStyles, Theme, IconButton } from "@material-ui/core";
import ItemBox from "@material-ui/core/ListItem";
import { grey } from "@material-ui/core/colors";
import { ThumbUpAltOutlined, ThumbUp } from "@material-ui/icons";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginLeft: "auto",
            borderRadius: "40px"
        }
    })
);

const RecipeItem = () => {
    const classes = useStyles();
    const [like, setLike] = useState(false);
    return (
        <>
            <ItemBox>
                <div className="listitem-container">
                    <Avatar
                        variant="square"
                        alt="food"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fruit-salad-horizontal-jpg-1522181219.jpg"
                        className={classes.large}
                    />
                    <div className="recipeitem-info">
                        <p className="recipe-title">상큼한 방울토마토 마리네이드</p>
                        <p className="recipe-ingredients">방울토마토, 양파</p>

                        <IconButton style={{ marginLeft: "auto" }} onClick={() => setLike(!like)}>
                            {like ? (
                                <ThumbUp style={{ color: grey[50], fontSize: "2rem" }} />
                            ) : (
                                <ThumbUpAltOutlined style={{ color: grey[50], fontSize: "2rem" }} />
                            )}
                        </IconButton>
                    </div>
                </div>
            </ItemBox>
            <Divider style={{ backgroundColor: grey[600] }} />
        </>
    );
};

export default RecipeItem;