import styled from "styled-components";

export const Row = styled.div((props: { height: string, width: string }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
    width: props.width,
    height: props.height
}));

export const Column = styled.div((props: { margin: number }) => ({
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: props.margin,
}))

export const TitleStyle = styled.div(({
    marginTop: '20px'
}));

export const LabelStyle = styled.div(({
    marginTop: '10px'
}));

export const ButtonStyle = styled.div(({
    marginTop: '30px'
}))